
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Refresh" content="5; url=./index.html">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body class="page-success">
    <a href="./index.html">
        <div class="homeRedirect">
            <h1 class="R animated fadeInLeftBig">R</h1>
            <h1 class="L animated fadeInDown">L</h1>
        </div>
    </a>
    <h1>
        <?php
                if(isset($_GET['Success']) && !empty($_GET['Success'])){
                $Success = trim( $_GET['Success'],"0" );
                $Success = trim( $_GET['Success'] );
                echo $Success;
                }
        ?>
    <h1>
    <p>You will be redirected back to the web page in 5 seconds...<br>Or <a href="./index.html">Click here</a></p>

</body>
</html>