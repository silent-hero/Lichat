<?php

include "connection.php";

$data = json_decode(file_get_contents("php://input"));
$response = "";

$title = $data -> title;
$description = $data -> description;
$picture = $data -> picture;
$owner = $data -> owner;
$token = $data -> token;


if(checkToken($token, $owner))
{
    addTheme();
}

function addTheme()
{
    global $connection, $owner, $title, $description, $picture;
    $sql = "INSERT INTO themes (owner, title, description, picture, date) VALUES ('$owner', '$title', '$description', '$picture', NOW())";
    $statement = mysqli_prepare($connection, $sql);
    if($statement->execute())
    {
        echo true;
    }
    else
    {
        echo false;
    }
}

echo $response;