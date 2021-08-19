# firstPlugin
Es un plugin de prueba dónde corre en un ambiente cordova para android

¿Cómo se genero el plugin?
El plugin se desarrollo con plugman se instala desde con el comando node npm install plugman.
Para crear un plugin nuevo ejecuta el siguiente comando 
```  
plugman create --name CordovaCustomPlugin --plugin_id info.androidabcd.plugins.custom --plugin_version 1.0.0

```
Despues se añade la plataforma donde se requiere usar el plugin
```  
plugman platform add --platform_name android

```
Los archivos a editar se encuentran en la siguiente ruta.  
Andorid  
 src/android/< nombre del plugin >.java

iOS  
src/ios/< nombre del plugin >.c

Una vez desarrollado el código, genera el package.json con el comando:
```  
plugman createpackagejson ./

```

Para la instalación del plugin se ejecuta el siguiente comando desde el root del proyecto dónde se requeiere usar:
```
cordova plugin add < path >
```
NOTA: El path debería ser una dirección url de GitHub para este ejemplo el Plugin vive dentro de la carpeta CordovaCutomPlugin




