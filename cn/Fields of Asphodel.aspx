<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="YourProjectName.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Centered Image and Video</title>
    <style type="text/css">
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Ensures the content is centered vertically in the viewport */
            margin: 0;
            background-color: #f0f0f0; /* Optional: light background color */
            font-family: Arial, sans-serif;
        }
        .content-container {
            text-align: center; /* Centers inline-block elements like img and video horizontally */
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px; /* Space between containers if you add more */
        }
        .content-container img {
            max-width: 100%; /* Ensures image is responsive */
            height: auto;
            display: block; /* Removes extra space below image */
            margin: 0 auto; /* Centers the image itself */
            border-radius: 4px;
        }
        .content-container video {
            max-width: 100%; /* Ensures video is responsive */
            height: auto;
            display: block; /* Removes extra space below video */
            margin: 0 auto; /* Centers the video itself */
            border-radius: 4px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="content-container">
            <img src="../home.jpg" alt="home" href="../index.html"/>
        </div>

        <div class="content-container">
            <video controls>
                <source src="assets/videos/starwar.mp4" type="video/mp4" />
            </video>
        </div>
    </form>
</body>
</html>