# Models

- THe models object provided by the Mongoose library and stores all the registered models.
- If a model named User already exists in the models object, it assigns that existsing model to the 'User' variable
- This prevents redefininf the model and ensures that the existing model is reused

- If a model named 'User' does not exist in the 'models' object, the 'model' function is called to create a new model
