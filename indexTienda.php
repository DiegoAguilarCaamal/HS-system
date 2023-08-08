<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "tiendadiegodb";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

//Busca el la fila donde el correo y la contraseña sean las siguientes
if(isset($_GET["login"])){
    $userData = json_decode(file_get_contents("php://input"));
    $email = $userData->email;
    $password = $userData->password;
    $sqlUser = mysqli_query($conexionBD, "SELECT * FROM `expediente personal general` WHERE Correo ='$email' AND Password='$password'");
    if(mysqli_num_rows($sqlUser)>0){
        $user = mysqli_fetch_all($sqlUser,MYSQLI_ASSOC);
        echo json_encode($user);
        exit();
    }else
    {echo("no se encontro el usuario");}
}
// Consulta datos y recepciona una clave para consultar dichos datos con la clave
if (isset($_GET["consultar"])){
    $id=$_GET['consultar'];
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM `expediente personal general`WHERE RecordNumber='$id'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET['borrar'])){
    
    $id = $_GET['borrar'];
  
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM `expediente personal general` WHERE RecordNumber='$id'");}
    
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $NSS=$data->NSS;
    $LastName=$data->LastName;
    $bDate=$data->bDate;
    $department=$data->department;
    $position=$data->position;
    $admissionDate=$data->admissionDate;
    $bloodType=$data->bloodType;
    $Locker=$data->Locker;
    $cellNumber=$data->cellNumber;
    $correo=$data->correo;
    $password = $data->password;
    //$correo=$data->correo;
  //$contrasenia=$data->Contraseña;
   // $password=$data->
        //if(($correo!="")&&($nombre!="")){
    if(($nombre!="")){
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO `expediente personal general` (`NSS`, `Nombre`, `Apellidos`, `Fecha de nacimiento`, `Departamento`, `Puesto`, `Fecha de Ingreso`, `Tipo de sangre`, `Casillero`, `Correo`, `Telefono`,`Password`) VALUES ('$NSS', '$nombre', '$LastName', '$bDate', '$department', '$position', '$admissionDate', '$bloodType', '$Locker', '$correo', '$cellNumber','$password');");
    echo json_encode(["success"=>1]);   
        }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){

   // $id=$_GET["actualizar"];
    //$nss=$_GET['actualizar'];

    $data = json_decode(file_get_contents("php://input"));
    //$nss=(isset($data->NSS))?$data->NSS:$_GET["actualizar"];
    $id =$_GET['actualizar'];
    $NSS=$data->NSS;
    $nombre=$data->nombre;
    $LastName=$data->LastName;
    $bDate=$data->bDate;
    $department=$data->department;
    $position=$data->position;
    $admissionDate=$data->admissionDate;
    $bloodType=$data->bloodType;
    $Locker=$data->Locker;
    $cellNumber=$data->cellNumber;
    $correo=$data->correo;

    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE `expediente personal general` SET `NSS`='$NSS',`Nombre`='$nombre',`Apellidos`='$LastName',`Fecha de nacimiento`='$bDate',`Departamento`='$department',`Puesto`='$position',`Fecha de Ingreso`='$admissionDate',`Tipo de sangre`='$bloodType',`Casillero`='$Locker',`Correo`='$correo',`Telefono`='$cellNumber' WHERE `RecordNumber`='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
//Agrega registro de extintores
if(isset($_GET['ext'])){
    $xExt=$_GET['ext'];
    $dataExt = json_decode(file_get_contents("php://input"));
    $Fecha= $dataExt->fecha;
    $Ubicacion= $dataExt->ubicacion;
    $Agente= $dataExt->agente;
    $Capacidad= $dataExt->capacidad;
    $Recarga=$dataExt->recarga;
    $Manometro= $dataExt->manometro;
    $Pasador= $dataExt->pasador;
    $Manguera= $dataExt->manguera;
    $Boquilla= $dataExt->boquilla;
    $Manija= $dataExt->manija;
    $Cilindro= $dataExt->cilindro;
    $Pintura=$dataExt->pintura;
    $Senial= $dataExt->senial;
    $Acceso= $dataExt->acceso;
    $Visibilidad= $dataExt->visibilidad;
    $Observaciones= $dataExt->observaciones;
    $Creacion=$dataExt->creacion;
    $Numero= $dataExt->numero;
    $id= $dataExt->Id;
    $sqlEx = mysqli_query($conexionBD, "INSERT INTO `bitacoraextintores` (`Fecha`, `Ubicacion`,`Agente`, `Capacidad`, `Recarga`, `Manometro`, `Pasador`, `Manguera`, `Boquilla`, `Manija`, `Cilindro`, `Pintura`, `Senial`, `Acceso`, `Visibilidad`, `Observaciones`, `Creacion`, `Numero`,`Id`) VALUES ('2023-07-13', '$Ubicacion','$Agente', '$Capacidad', '$Recarga', '$Manometro', '$Pasador', '$Manguera', '$Boquilla', '$Manija', '$Cilindro', '$Pintura', ' $Senial', '$Acceso', '$Visibilidad', '$Observaciones', '$Creacion', '$Numero','$id');");
    echo json_encode(["success"=>1]);   
    exit();
}
if(isset($_GET['fa'])){
    $FaData = json_decode(file_get_contents["php://input"]);
    $sqlFa = mysqli_query($conexionBD,"INSERT INTO `botiquinfa` (`fecha`, `ubicacion`, `gauze5`, `compress10`, `band`, `dressing`, `micropore`, `adhesiveB`, `water`, `soap`, `scissors`, `gloves`, `thermometer`, `splint`, `Fsplint`, `o2`, `Rcollar`, `Scollar`, `ambu`, `pani`, `id`) VALUES ('2023-07-19', 'comedor', '3', '3', '3', '3', '3', '3', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1');");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla clientes
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM `expediente personal general` ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }

?>