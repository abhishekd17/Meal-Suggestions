import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score
import joblib
import nltk
from sklearn.feature_extraction import FeatureHasher
from nltk.stem import PorterStemmer
from sklearn.base import BaseEstimator, TransformerMixin
import string

# Download NLTK resources (if not already done)
nltk.download('stopwords')
from nltk.corpus import stopwords

# Define a custom transformer for text preprocessing and stemming
class TextPreprocessor(BaseEstimator, TransformerMixin):
    def __init__(self):
        self.stemmer = PorterStemmer()
        self.stop_words = set(stopwords.words('english'))

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        # Apply clean_and_stem to each column (Series) individually
        # and return a list of strings for each sample
        transformed_data = []
        for _, row in X.iterrows():  # Iterate through rows
            transformed_row = []
            for col in X.columns:
                cleaned_text = self.clean_and_stem(str(row[col]).lower())  # Ensure string type
                transformed_row.extend(cleaned_text.split())  # Split into words
            transformed_data.append(transformed_row)  # Append the list of words
        return transformed_data  # Return the list of lists

    def clean_and_stem(self, text):
        # Convert to lowercase, remove punctuation and stopwords, then apply stemming
        # Handle NaN values as empty strings
        if pd.isnull(text):
            return ''
        text = ''.join([char for char in text if char not in string.punctuation])
        words = text.split()
        words = [self.stemmer.stem(word) for word in words if word not in self.stop_words]
        return ' '.join(words)

# Load dataset
data = pd.read_csv('/content/generated_meal_data.csv')

# Separate features and target
X = data.drop('Suggested Meals', axis=1)
y = data['Suggested Meals']

# Categorical and numerical columns
categorical_cols = ['Activity Level', 'Goal', 'Dietary Preferences & Allergies', 'Vitamin Deficiency']  # Include Vitamin Deficiency if categorical
numerical_cols = ['Age', 'Weight', 'Height']

# Step 1: Preprocessing pipeline for numerical features
numerical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),  # Handle missing values with median
    ('scaler', StandardScaler())  # Standardize numerical features for consistency
])

# Step 2: Preprocessing pipeline for categorical features
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),  # Handle missing values by filling with most frequent value
    ('hasher', FeatureHasher(input_type='string', n_features=10))  # Use FeatureHasher for high-cardinality strings
])

# Step 3: Preprocessing pipeline for text features (apply stemming and cleaning)
text_columns = ['Activity Level', 'Goal', 'Dietary Preferences & Allergies', 'Vitamin Deficiency']  # Include text-based columns
text_transformer = Pipeline(steps=[
    ('text_preprocessor', TextPreprocessor()),  # Apply stemming and cleaning to text
    ('vectorizer', FeatureHasher(input_type='string', n_features=10))  # Hashing for text
])

# Step 4: Combine the transformations using ColumnTransformer
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_cols),
        ('cat', categorical_transformer, categorical_cols),
        ('text', text_transformer, text_columns)
    ])

# Step 5: Create a pipeline with preprocessing and model
model_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1))  # Efficient Random Forest with parallelism
])

# Step 6: Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 7: Train the model
model_pipeline.fit(X_train, y_train)

# Step 8: Evaluate the model
y_pred = model_pipeline.predict(X_test)
print(f'Accuracy: {accuracy_score(y_test, y_pred)}')

# Save the trained model to disk for future use
joblib.dump(model_pipeline, 'meal_suggestion_model.pkl')