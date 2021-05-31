<?php

$email = addcslashes($_REQUEST['q']) ;

mail( "zkoeppl@gmail.com", "E-Mail entered",
"E-Mail entered: $email");
header( "Location: https://zachk26.github.io/" );
?>