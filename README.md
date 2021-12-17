# Quick Start Guide

```
Supported Unity Version: 2020
```
## 1. Install the plugin

Plugin is installed through Unity package manager. Browse through **Window** > **Package
Manager** , and select **Add Package from disk**

Browse through the plugin **package.json** file and add it


Now its added in your Unity Package Manager

## 2. Setup Config Variables

Create a **Resources** folder inside Project **Assets** folder. Browse to **Record** > **Config**

**RecordConfig** will be created inside **Resources** folder. You can add Int, Float, String and
Boolean config variables which can be accessed on runtime to modify the gameplay.


Now all the config variables can be accessed in code using **PlayableFactory** namespace and
**Config** class.

_PlayableFactory.Config.GetInt(“config variable name string”);_

## 3. Build and Upload

If there are no errors on Unity console, you can proceed to build

First make sure all the relevant scenes are added in the **Build Settings** and platform is switched
to **WebGL**


Browse **Record** > **Build** , and enter the username and password to login into the plugin

After login, you can configure the optimization settings and name. Then select **Build**

It will take few minutes, and will print the results in Unity console. If the build fails it will show the
errors in the Unity console which should be addressed first before attempting to build again.

If build succeeds then it will attempt to upload and show the upload status. If upload is successful
then you can now open dashboard and can see the game.


## 4. Known Issues

### Invalid Credentials on Login

If your credentials are correct please make sure you are connected to the internet.

### Upload Failed after Build Failed

Unity console will print out the errors that are causing the build to fail. Most of the errors are
associated with third party plugins, so you need to comment out those references in your game
code or remove the plugins completely if errors still persist.

List of known files and plugins that conflict are

- Newtonsoft.Json

    - Unity has now included Newtonsoft.Json as part of their own bundle after 2019, if you are using
it externally then either you can remove the external file and refer to the built-in Unity has
provided or you can simply remove Unity Collab package from the Package manager (that
already includes the Newtonsoft.Json to avoid the redundancy errors)

- Firebase Analytics

    - Google Firebase Analytics plugins can cause the conflict, try to remove the its references in your
game code or remove the plugin completely if error still persist.

- NaughtyAttributes

    - In some rare cases the third party Unity extension NaughtyAttributes can cause some conflict,
try to remove the its references in your game code or remove the plugin completely if error still
persist.

- VoodooSauce

    - In some rare cases the third party Unity extension VoodooSauce can cause some conflict, try to
remove the its references in your game code or remove the plugin completely if error still persist.

### Upload Failed after Build Successful

Please make sure you are connected to the internet and you are not getting any time out errors. If
everything is perfect at your end, try it again after sometime (as it could be due to server
downtime for maintenance)


