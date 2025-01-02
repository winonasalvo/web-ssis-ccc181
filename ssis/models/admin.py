from . import cursor
from werkzeug.security import check_password_hash

class Admin():
    def __init__(
        self,
        username: str = None,
        password: str = None,
        password2: str = None) -> None:

        self.username = username
        self.password = password
        self.password2 = password2

    
    def registered_user(self) -> bool:
        return True
        # query = f'''
        #     SELECT username, password 
        #     FROM admin
        #     WHERE username = '{self.username}';
        # '''
        # cursor.execute(query)
        # print("registered _user: " + self.username, self.password)
        # try:
        #     username, password = cursor.fetchone()
        #     print("registered _user tryp: " + password)
        #     print("passwordDB: " + password, "passwordAdmin: " + self.password)
        #     if password == self.password: ## Improve pass auth using check_password_hash(password, self.password):
        #         print("pass, true")
        #         return True
        # except TypeError:
        #     return None


