# Basic setup for a Django-React project

The project structure is the following:

* A Django root directory called `setup-django-react-project`
* A Django working directory called `core`
* Two Django apps:
 * `core`, the *backend* app, an API built with the *Django Rest Framework*
 * `frontend`, where React takes care of the rendering side

## Steps to use this setup
1. Create a new folder
2. Open the command line and navigate to the folder directory
3. Type `git clone https://github.com/Techoplite/setup-django-react-project.git` in order download the git repository
4. Open the `setup-django-react-project` root directory in a code editor
5. If you want to use it inside a virtual environment, create one by typing `python -m venv env`, otherwise skip to __*Step 8*__
6. Activate the virtual environment (check how to do this on your OS).
7. Install Django and the Django Rest Framework by typing `pip install django djangorestframework`
8. Install Webpack and Webpack the Webppack Command Line Interface by typing `npm i webpack webpack-cli`
9. Inside the terminal, navigate to the working folder by typing `cd core`
10. Start the Django development server by typing `python manage.py runserver`
11. Open another terminal and navigate to the `frontend` app by typing `cd core/frontend` 
12. Run the webpack development server by typing `npm run dev`
13. Accessing the localhost `http://127.0.0.1:8000/` in your browser, you should see the text __'Django and React are working together now!'__

## Extra steps to see the backend working

1. From the working folder `core`, apply the database migrations by typing `python manage.py migrate`
2. Open another web tab and access the URL `http://127.0.0.1:8000/api/testmodels/`, which is the API coming with the Django Rest Framework
3. From here, create an object by sending a POST request
4. Refresh your localhost and you should see the newly created object.

#### *__From here on there should be no problems, just remember to change the `test_app` name and the model references accordingly with your first app name, or create a new app by following the structure of the `test_app` directory.__*

