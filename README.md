# Rest Api with Node-express


## Create a new repository on the command line:

Add new git repository on your existing system, If code already exits in your local system.

* git init
* git add README.md
* git commit -m "first commit"
* git remote add origin https://github.com/info-ankit/node-express-rest-shop.git
* git push -u origin master

Clone new git repository on your existing system, when you want to get whole code from git.

* git clone https://github.com/info-ankit/node-express-rest-shop.git
* git status
* cd node-express-rest-shop
* npm install
* npm start

## Push an existing repository from the command line

Push your code from local to git.

* git remote add origin https://github.com/info-ankit/node-express-rest-shop.git
* git push -u origin master


#Work Done:
### Base Url - 
* http://localhost:3000/
    * {"error":{"message":"Not Found!!!"}}
* http://localhost:3000/api
    * {"error":{"message":"Not Found!!!"}}
* http://localhost:3000/api/orders
    * {"message":"Handling GET request for /orders route.","result":[{"_id":"5b587d82ab87731ab423e373","productId":"5b51e55b8982f9327cd4e5ff","quentity":1,"orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0},{"_id":"5b587d95ab87731ab423e374","productId":"5b4f350d6e96c4386894e1b2","quentity":1,"sallerId":"5b4f350d6e96c4386894e1b2","orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0},{"_id":"5b587db9ab87731ab423e375","productId":"5b4f2da5c356983bb8548883","quentity":7,"sallerId":"5b4f350d6e96c4386894e1b2","orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0},{"_id":"5b5886150eafe521d032b2be","productId":"5b51e55b8982f9327cd4e5fe","quentity":7,"sallerId":"5b4f350d6e96c4386894e1b2","orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0},{"_id":"5b58866f9a9d061e08246ba2","productId":"5b51e55b8982f9327cd4e5ff","quentity":7,"sallerId":"5b4f350d6e96c4386894e1b2","orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0},{"_id":"5b58869c31fc542fa085f283","productId":"5b51e55b8982f9327cd4e5ff","quentity":7,"sallerId":"5b4f350d6e96c4386894e1b2","orderPrice":83.45,"status":1,"orderDate":1531837201,"__v":0}]}