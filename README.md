# Full stack blog site
### functionalities: [login, logout, signup, create post, recent ten posts, posts made by current user

## find Sparkling blogers 
@ https://sparklingblogers.netlify.app/
deployed frontend using netlify
Frontend code is present in repo :https://github.com/VishnupriyaThammina/SparkleClient/


## deployed backend using vercel
https://sparkle-server-lyart.vercel.app/
Backend code is present in repo :https://github.com/VishnupriyaThammina/SparkleServer


## Steps to run locally
1. set up:
clone frontend  [code is in : https://github.com/VishnupriyaThammina/SparkleClient/]
=> do `npm install`

clone backend [code is in: https://github.com/VishnupriyaThammina/SparkleServer]
=> do `npm install`

2. running:

   
frontend: npm start
backend: npm start 

3. change axios urls in frontend from
`https://sparkle-server-lyart.vercel.app/` to http://localhost:8080/

4. make a .env file
add 
`
uri ='mongo db url';
secretKey ='write some secretkey which will be used in jwt'
`
![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/788c47f9-3452-4e38-8cf8-297fc25069aa)
{please find this reference image}
and we are good to go 
# Backend deep dive
We have 2 schemas
1. User

2. Post
And 2 route sections are segregated on this basis

![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/a953c645-8304-4598-9579-c942aec1f38f)
as MVC model is followed for backend 

routes such as

1. register, login, update users use http://localhost:8080/users/{*followed by routes*}

   
2. post creation,edit,fetching upon various conditions use http://localhost:8080/posts/{*respective routes*}

   
### Documentation for api end points:[with a flow explaining the project]
1. Let's start with user routes :
   
   we have secure frontend and backend routing, without jwt token generation in backend and without token set in local storage, we cant access other routes both in frontend and backend which will ensure security of the application

in the beginning all routes are redirected to login [sign up can be accessed too] [login,sign up navigation is made considering users attention span]

   a. http://localhost:8080/users/login(end point api for login)
   
      http://localhost:3000/login(frontend route)
   

   ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/087d6b89-06ea-4123-b435-f2b82b4b04c0)

   b.  http://localhost:8080/users/register(end point api for register)
   
       http://localhost:3000/register
      
   ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/c3a155df-25d4-4880-8bd1-48ecea44f43e)

2. Upon successful login we get access to all other routes

  c.We will be navigated to home page it has aesthetic navbar with clean design principles followed
  
  ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/df74ba0c-53b8-4a8f-800b-84f1056fa8cd)

Home page uses `http://localhost:8080/posts/recents` to fetch recent 10 posts made by users 

![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/f88efdb1-73cd-4328-843d-4e3b2b018ab4)

[ps: Dummy data]

3. Feed page fetches all posts use get end point `http://localhost:8080/posts/`
   
   ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/718d8e04-dfc3-4a7f-abd6-36206076fc14)


 4. Create post page creates a post using post endpoint `http://localhost:8080/posts/` along with preview in frontend
    ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/ebf3671e-6f75-40e1-b832-1be42fadec9a)

once we submit and make a post
post will be updated in recent post,  feed and on profile
![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/c4226d08-8c70-4a84-97b6-71786a0ad1e9)

 5. this is our profile page
    we use two end points her
    1. `http://localhost:8080/users/current` to get current user data and depending on this we get posts related to this particular user and populate them below user info with end point `http://localhost:8080/posts/:postid` we get post id using username search in our post schema 
refer user and post schema for detailed understanding

![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/1376be6a-ebc8-45a7-918c-c6ff8c47e374)

6. editing profile
`http://localhost:8080/users/update` using this end point and controller funtions we update users
   ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/aefd9563-54a3-41d1-acc5-f31209371461)
![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/382cc5d1-63a1-4a8d-b50d-09bc56ea3d5c)

7. editing post
 ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/2c0178ba-2b9f-4c6f-8ca1-d727e943827b)
we will edit this post

![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/dc3bb367-a3ba-4fa9-abcf-4e3c003095e4)
This is how the post view page looks like
using end point `http://localhost:8080/posts/:id` id coming from card component
   due to conditional rendering only posts made by user which made the post can edit
   ![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/6f93e261-f3c5-410f-acbe-159baf923a4b)
See the id which is same after edit

8. onclick logout 
we logout of the site and get redirected to login
local storage token is deleted
so jwt token set to empty too
![image](https://github.com/VishnupriyaThammina/SparkleClient/assets/89837239/449d2f10-2257-4db3-b441-86ec1d3492b8)
 
## find Sparkling blogers 
@ https://sparklingblogers.netlify.app/
deployed frontend using netlify
Frontend code is present in repo :https://github.com/VishnupriyaThammina/SparkleClient/


## deployed backend using vercel
https://sparkle-server-lyart.vercel.app/
Backend code is present in repo :https://github.com/VishnupriyaThammina/SparkleServer

Thank you for reading through 
Made this project with love!
