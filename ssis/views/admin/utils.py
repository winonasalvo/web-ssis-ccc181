from ssis.models.admin import Admin

def admin_found(username: str, password: str) -> bool:
    print("admin_found: " + username, password)
    if Admin(username,password).registered_user():
        return True
    print("admin not found")
    return False

