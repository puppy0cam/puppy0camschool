function wrapper(context){
    context.pageDirectory = {
        "BaseURI": function(place) {
            return new URL(location.protocol+"//"+location.hostname+location.pathname+place);
        },
        "page": { /*
                    this object will be what tells the navigation bar how it should appear.
                    all places should have an index element.
                    if you want a dropdown box, you simply need to include something other than index in it as well.
                    please be aware that you also need to define things in content too.
                  */
            "Home": {
                "index": "#"
            },
            "Disclaimer": {
                "index": "#"
            },
            "About": {
                "index": "#"
            },
            "Contact Us": {
                "index": "#"
            },
            "Mobile Tips": {
                "index": "#"
            },
            "media": {
                "index": "#",
                "image1": "#",
                "image2": "#",
                "image3": "#"
            }
        },
        "content": { /*
                       this object defines the html that will be modified in the body of the webpage.
                       index should only be defined in this object if you actually plan on using index.
                       otherwise index is required.
                     */
            "Home": {
                "index": "\r\n        <h1>PhotoShop Powertool</h1><br>To access the guide to scanning documents, click <a href=\"Documents/Scanning Images.doc\" style=\"color: #800000;\">here!</a><br><br>Welcome to a tutorial that will show you the many features and tools available in photoshop and will be demonstrating what you can do with them.<br>Below, you can find what has gone into making some edits in PhotoShop. by clicking on them you can also see an animation that shows the difference between the original and the edited version of the image. clicking on the animation will return you back here.<br><br>\r\n        <table align=\"center\">\r\n            <tr style=\"text-align: inherit; font-size: 20px;\">\r\n            <th style=\"text-align: inherit;\">Before</th>\r\n            <th style=\"text-align: inherit; width:480px;\">Process</th> \r\n            <th style=\"text-align: inherit;\">After</th>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><b><br>Image 1</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 1</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 1</b></img></td>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image1');\" src=\"media/image1before.JPG\" width=\"240px\"></img></td>\r\n            <td width=\"480px\" style=\"text-align: inherit; width: 480px;\">First I used the lasso and magnetic lasso tool to select the toy. After doing this I copied it over to a new document.<br>After this what I did was create a new layer in the new document and put a bit of white onto the eyes of the toy. When this was done I used the smudge tool to create a milky effect on the eyes.<br>Now that I had done this, I went back to the first layer and used the lasso tool to select the eyes, moustache, and hat and then cut this into it's own layer.<br>With the remaining purple body I applied the color modification tool to give it a darker green tint on it's body. This was to give the toy the feeling of something mutant.<br>Finally, I adjusted the brightness of the entire image and lowered the contrast to give it a tone of a mutant businessman. When this was completed I copied over the image to the original image, aligned it to the correct position and saved the project.</td> \r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image1');\" src=\"media/image1after.JPG\" width=\"240px\"></img></td>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><b><br>Image 2</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 2</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 2</b></img></td>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image2');\" src=\"media/image2before.JPG\" width=\"240px\"></img></td>\r\n            <td width=\"480px\" style=\"text-align: inherit; width: 480px;\">the objective of this image was to make a immobile fan to appear that it is moving.<br>how this was done was by selecting the fan blades, making a few copies of them in their own layers and then rotating each one individually a small amount. this created our surface. what was done next was, the newly added layers for the blades had their visibility adjusted to make the effect of the wind movement.<br>after this, the smudge tool was used on the original image to better merge the fan blades together.<br>Finally, I fixed up some bright lighting with the burn tool.</td> \r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image2');\" src=\"media/image2after.JPG\" width=\"240px\"></img></td>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><b><br>Image 3</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 3</b></img></td>\r\n            <td style=\"text-align: inherit;\"><b><br>Image 3</b></img></td>\r\n            </tr>\r\n            <tr style=\"text-align: inherit;\">\r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image3');\" src=\"media/image3before.JPG\" width=\"240px\"></img></td>\r\n            <td width=\"480px\" style=\"text-align: inherit; width: 480px;\">This is a fairly interesting image because of what I did to it. it is taken during an event for a game.<br>What I did with this was I decided to make the team colour more prominent on the image so, in Photoshop I got to work using the colour replacement tool to colour their hair. after this I decided that I would make the clearly visible part of the image more interesting by giving his clothing a even larger green tint.</td> \r\n            <td style=\"text-align: inherit;\"><img onclick=\"window.pageDirectory.openPage('media/image3');\" src=\"media/image3after.JPG\" width=\"240px\"></img></td>\r\n            </tr>\r\n        </table>\r\n        <br>"
            },
            "Disclaimer": {
                "index": "\r\n        <h1>Disclaimer</h1>\r\n        <p>The information contained in this website is for educational purposes only.</p>\r\n        <p>The information provided in this website does not in any way, shape or form, relate to any existing business.</p>\r\n        <p>We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>\r\n        <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p><p>this website uses some externaly gained tools to run.</p><p>The copyright to jQuery belongs to the jQuery Foundation</p><p>The copyright to boostrap belongs to Twitter, Inc.</p>\r\n        <br>"
            },
            "About": {
                "index": "\r\n        <h1>About Us</h1>\r\n        <p>Calamvale Community College is a P-12 Independent State School established in 2001.</p>\r\n        <p>It is divided into two sub-schools – Junior and Secondary.</p>\r\n        <p>Each has a separate principal and teaching staff, along with a college principal to lead the rest of the school</p><p>This website was made by Cameron Hawkins in the objective to provide a simple example and tutorial of using Photoshop.</p><p><img src=\"media/websiteBuilder.JPG\" style=\"width:40%\"></img></p>"
            },
            "Contact Us": {
                "index": "\r\n        <a style=\"font-size: 16px; color: black;\" href=\"mailto:admin@calamvale.com?subject=Enquiry&body=-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C%0A%0A-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C-%7C\">Click Here to Contact Us at admin@calamvale.com</a><br><br><br><br><br><iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7069.925288433107!2d153.04378570424464!3d-27.625673580158594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d9dd8c4a8b90b!2sCalamvale+Community+College!5e0!3m2!1sen!2sau!4v1503016372657\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"
            },
            "Mobile Tips": {
                "index": "<h2>Three Tips</h2><table align=\"center\"><tr style=\"text-align: inherit;\"><th style=\"text-align: inherit;\"><b>Tip 1</b></th></tr><tr style=\"text-align: inherit;\">                <td style=\"text-align: inherit;\">Never have your Phone set to being in portrait. This will always hurt you down the line. Not everybody uses mobile.</td></tr>                 <tr style=\"text-align: inherit;\"><th style=\"text-align: inherit;\"><b>Tip 2</b></th></tr><tr style=\"text-align: inherit;\">                <td style=\"text-align: inherit;\">                Give your phone time to adjust the focus. If it dosnt come into focus, you can usually tap on the part of the screen you are aiming to take an image of and it will focus to the tapped location for you.</td></tr>                 <tr style=\"text-align: inherit;\"><th style=\"text-align: inherit;\"><b>Tip 3</b></th></tr><tr style=\"text-align: inherit;\"><td style=\"text-align: inherit;\">                Use the camera on the back of the phone. The selfie camera isnt as good as the one on the other side of the camera.</td></tr></table>"
            },
            "media": { //as you can see in this object there is no index. this is because it is a dropdown menu.
                "image1": "\r\n        <img src=\"media/image1.gif\" width=\"75%\" href=\"#\" onclick=\"window.pageDirectory.openPage('Home/index');\"></img><br>Image One Comparison",
                "image2": "\r\n        <img src=\"media/image2.gif\" width=\"75%\" href=\"#\" onclick=\"window.pageDirectory.openPage('Home/index');\"></img><br>Image Two Comparison",
                "image3": "\r\n        <img src=\"media/image3.gif\" width=\"75%\" href=\"#\" onclick=\"window.pageDirectory.openPage('Home/index');\"></img><br>Image Three Comparison"
            }
        },
        "currentPage": "Home",
        "createNavBar": function(page) { //more complicated because compatability with the html is being ensured.
            var page = page || "Home";
            var data = document.createElement("ul");
            for (var thisPage in context.pageDirectory.page) {
                var i = 0;
                var elem = document.createElement("li");
                for (var temp1456 in context.pageDirectory.page[thisPage]) {
                    i++
                }
                if(i>1) {
                    var ul = document.createElement("ul");
                    ul.setAttribute("class","dropdown-menu");
                    elem.setAttribute("class","dropdown");
                }
                for (var subItem in context.pageDirectory.page[thisPage]) {
                    var textArea = document.createElement("a");
                    textArea.innerText = thisPage;
                    textArea.setAttribute("href","javascript:void{}");
                    textArea.setAttribute("onclick","pageDirectory.openPage('"+thisPage+"/"+subItem+"');");
                    if(subItem === "index") {
                        textArea = document.createElement("a");
                        textArea.innerText = thisPage;
                        if(i>1) {
                            textArea.setAttribute("class", "dropdown-toggle");
                            textArea.setAttribute("data-toggle", "dropdown");
                            textArea.setAttribute("role","button");
                            textArea.setAttribute("aria-haspopup","true");
                            textArea.setAttribute("aria-expanded","false");
                            textArea.setAttribute("href","javascript:void{}");
                            var span = document.createElement("span");
                            span.setAttribute("class","caret");
                            textArea.appendChild(span);
                            elem.appendChild(textArea);
                        }
                    }
                    if(i>1 && subItem !== "index") {
                        textArea.innerText = subItem;
                        textArea.setAttribute("href","javascript:void{}");
                        textArea.setAttribute("onclick","pageDirectory.openPage('"+thisPage+"/"+subItem+"');");
                        var li = document.createElement("li");
                        li.appendChild(textArea);
                        ul.appendChild(li);
                    }
                    if(ul) {
                        elem.appendChild(ul);
                        if(thisPage === page) {
                            //elem.setAttribute("class","active");
                            elem.setAttribute("style","background-image: linear-gradient(to bottom,#A52A2A,#A52A2A,#A52A2A,#A52A2A,teal);")
                        }
                    } else {
                        textArea.setAttribute("href","javascript:void{}");
                        textArea.setAttribute("onclick","pageDirectory.openPage('"+thisPage+"/"+subItem+"');");
                        elem.appendChild(textArea);
                        if(thisPage === page) {
                            //elem.setAttribute("class","active");
                            elem.setAttribute("style","background-image: linear-gradient(to bottom,#A52A2A,#A52A2A,#A52A2A,#A52A2A,teal);")
                        }
                    }
                }
                data.appendChild(elem);
            }
            return data
        },
        "openPage": function(page,data) { //opens the page. must contain page even if data is defined for the navigation bar's purposes. data is optional and forces content to be data.
            var page = page.split("/") || ["Home","index"];
            page[1] = page[1] || "index";
            var data = data || context.pageDirectory.content[page[0]][page[1]];
            context.pageDirectory.currentPage = page.join("/");
            context.document.getElementById("navigationBar").innerHTML = context.pageDirectory.createNavBar(page[0]).innerHTML;
            context.document.getElementById("windowContent").innerHTML = data;
            console.log("page load");
            context.currentPage = page;
            return false
        }
    };
    window.onload = function(){
        console.log("loading");
        pageDirectory.openPage("Home/index");
    };
}
wrapper(window);