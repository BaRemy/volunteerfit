import os

database_path = "/home/lion/k/volunteerfit/instance/volunteerfit.db"  # replace with your database path

# Check database file exists
if not os.path.isfile('/home/lion/k/volunteerfit/instance/volunteerfit.db'):
    print(f"Database file does not exist: {'/home/lion/k/volunteerfit/instance/volunteerfit.db'}")
else:
    print(f"Database file exists: {'/home/lion/k/volunteerfit/instance/volunteerfit.db'}")

# Check application necessary permissions to access the database file
if not os.access('/home/lion/k/volunteerfit/instance/volunteerfit.db', os.R_OK):
    print(f"Read permission is not granted for the database file: {database_path}")
if not os.access('/home/lion/k/volunteerfit/instance/volunteerfit.db', os.W_OK):
    print(f"Write permission is not granted for the database file: {'/home/lion/k/volunteerfit/instance/volunteerfit.db'}")