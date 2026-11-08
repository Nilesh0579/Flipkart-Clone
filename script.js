function login(){
                document.getElementById("main0").innerHTML=`
            <div id="log">
                <div class="div1">
                    <h2>Login</h2><br><br><br>
                    <i><b>Login to get access to your Orders,Wishlist and Recomendation</b></i>
                </div>
                <form>
                    <br>
                    <h4 class="h4login"><b>Login</b></h4><br><br>
                    <i id="input1">
                    <b>Email-id</b>
                    <input type="email" placeholder="enter your email id"><br>
                    </i><br>
                    <i id="input2">
                        <b>Password</b>
                        <input type="password" placeholder="enter your password">
                    </i><br><br>
                    <button>Submit</button>
                    <br><br><br>
                    <p onclick="newAccount()" >New to Flipkart? Create an Account</p>
                </form>
            </div>`;
            }
            function newAccount(){
                document.getElementById("main0").innerHTML=`
                <div class="NewAccount">
                    
                    <form class="form1">
                        <br>
                        <h4 class="h4login">Create New Account</h4><br><br>
                        <i id="input1"><b>Enter your Name:</b></i>
                        <input type="text" placeholder="Name">
                    <br><br>

                        <i id="input2"><b>Enter Your Phone Number</b></i>
                        <input type="number" placeholder="Phone Number"><br>

                        <p>By continuing, you Agree to Flipkart <a href="">Terms of Us</a> and <a href="">Privacy Policy</a></p>

                        <button>Continue</button><br><br><br>
                        <p onclick="login()"> Existing User/Login </p>
                    </form>
                </div>`;
            }