<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xJunior | It Might Be You</title>
    <link rel="icon" href="./icons/webIcon.png">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/reset.css">

</head>
<body>
    <div class="container">
        <div class="c">div01</div>
        <div class="m">div02</div>
        <div class="y">div03</div>
    </div>
  <!--  php -->
  <form action="" method="GET" name="">
	<table>
		<tr>
			<td><input type="text" name="k" value="<?php echo isset($_GET['k']) ? $_GET['k'] : ''; ?>" placeholder="Enter your search keywords" /></td>
			<td><input type="submit" name="" value="Search" /></td>
		</tr>
	</table>
</form>
</body>
</html>