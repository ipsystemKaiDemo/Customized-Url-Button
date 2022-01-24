videojs.plugin('NewUrlButton', function() {
    videojs.getPlayer("vjs_video_3").ready(function() {
        // +++ Create divs for buttons +++
        var myPlayer = videojs.getPlayer("vjs_video_3"),
            // jumpAmount = 5,
            controlBar,
            insertBeforeNode,
            newElementTWP = document.createElement("div"),
            newImageTWP = document.createElement("img");

        // +++ Assign IDs for later element manipulation +++
        newElementTWP.id = "promoteButton";

        // +++ Assign properties to elements and assign to parents +++
        newImageTWP.setAttribute(
            "src",
            "https://dev-img.taiwanplus.com/vjs-cust-promote-button.png"
        );
        newElementTWP.appendChild(newImageTWP);

        // +++ Get controlbar and insert elements +++
        controlBar = myPlayer.$(".vjs-control-bar");
        // Get the element to insert buttons in front of in conrolbar
        insertBeforeNode = myPlayer.$(".vjs-picture-in-picture-control");

        // Insert the button div in proper location
        controlBar.insertBefore(newElementTWP, insertBeforeNode);

        // +++ Add event handlers to jump back or forward +++
        newElementTWP.addEventListener("click", function() {
            window.open("https://www.taiwanplus.com", "_blank");
        });
    });
})