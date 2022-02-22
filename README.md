# Quick Start Guide
Supported Unity Versions: 2020 (Coming soon 2019 LTS)

*Do not use any 3rd party SDK that sends or receives data (like advertisements, analytics, etc.) See section 4.3 for details*

## 1. Installation

Plugin is installed through Unity package manager. Browse through **Window** > **Package Manager**, and select **Add Package from disk**

Browse through the plugin **package.json** file and add it

Now its added in your Unity Package Manager

## 2. Configuration

Create a **Resources** folder in your project **Assets** folder

### 2.1 Built-in Parameters

Plugin provides the following built-in parameters to improve things for developers

#### 2.1.1 RandomSeed

When using any kind of third party Random value generator other than Unity, it must be initialized with built-in seed value like mentioned below

`PlayableFactory.Config.GetRandomSeed();`

If a project is using Unity Random Class then it is already initialized with a value which can be changed. To change it, browse through **Gearbox Video** > **Config** and change the value under **Random Seed**

### 2.2 Custom Parameters

There are seven types of custom parameters which can be created and used later on the web dashboard to reflect gameplay changes. They are **Integers**, **Floats**, **Bools**, **Strings**, **Colors**, **Sliders** and **Dropdowns**. 

In order to set them up, browse through **Gearbox Video** > **Config** and add them under their respective section with their default values. 

All parameters changes are reflected instantly, to get notified when parameters instantly changes during gameplay on record or replay, create a delegate method and subscribe it to the following event

`PlayableFactory.ConfigHandler.OnConfigChanged`

A special **Restart** option can be marked checked on any parameter which will require the game to be restarted as soon as the parameter is changed

Below are different types of parameters and how they can be accessed, inside the editor they will always return the default value

#### 2.2.1 Integer

Returns the **int** type value on integer type parameter

`PlayableFactory.Config.GetInt(“parameter-name”);`

#### 2.2.2 Float

Returns the **float** type value on float type parameter

`PlayableFactory.Config.GetFloat(“parameter-name”);`

#### 2.2.3 String

Returns the **string** type value on string type parameter

`PlayableFactory.Config.GetString(“parameter-name”);`

#### 2.2.4 Bool

Returns the **bool** type value on bool type parameter

`PlayableFactory.Config.GetBool(“parameter-name”);`

#### 2.2.5 Color

Returns the **UnityEngine.Color** type value on color type parameter

`PlayableFactory.Config.GetColor(“parameter-name”);`

#### 2.2.6 Slider

Returns the **float** type value (ranged from 0.0 to 1.0) on slider type parameter

`PlayableFactory.Config.GetSlider(“parameter-name”);`

#### 2.2.7 Dropdown

Returns the **string** type value on (from the string based selectable options) on dropdown type parameter

`PlayableFactory.Config.GetDropdown(“parameter-name”);`

## 3. Export

If there are no errors on Unity console, you can proceed to build

Make sure all the relevant scenes are added in the **File** > **Build Settings** and platform **WebGL** is also installed

### 3.1 Login

Browse through **Gearbox Video** > **Build**, and enter the username and password to login into the plugin

### 3.2 Build and Upload

After Login, you can specify the **Game Name**, **Template Name** along with its **Icon**, which will be reflected in the web dashboard as well.

You can change the **Build Settings** to optimize or tweak which linked to WebGL player export settings in Unity

Click **Build** to build and export the game to web dashboard

It will take a few minutes, and will print the results in the Unity console. If the build fails it will show the errors in the Unity console which should be addressed first before attempting to build again. 

If build succeeds then it will attempt to upload and show the upload status. If upload is successful then you can now open the dashboard and can see the game.

## 4. Guidelines for Modules

### 4.1 Physics

If game is physics intensive then you can enable the Enhanced Determinism option to reduce the unpredictability in replays, to enable browse through **Edit** > **Project Settings** > **Physics** and enable **Enable Enhanced Determinism**

Use **FixedUpdate()** method for physics based calculations, specially for dynamic physics (non-kinematic rigidbodies). Do not process input events inside **FixedUpdate()** method as Unity does not guarantee their accuracy on multiple runs

### 4.2 Input

Process input events ideally in **Update()** method. **Awake()**, **Start()**, **PreUpdate()** and **LateUpdate()** are also okay, but do not process input in **FixedUpdate()** method.

### 4.3 3rd Party SDKs

Any SDK or Kit that involves advertisement or that send / receive any kind of analytics data to the server outside must be avoided at all cost. Since the server delay can effect the gameplay.

### 4.4 Streaming Assets

According to Unity, to read streaming Assets on WebGL, where you cannot access streaming Asset files directly, use **UnityWebRequest**

## 5. Known Issues

### 5.1 Invalid Credentials on Login

If your credentials are correct please make sure you are connected to the internet. If everything is correct at your end, try it again after sometime (as it could be due to server downtime for maintenance)

### 5.2 Upload Failed after Build Failed

Unity console will print out the errors that are causing the build to fail. Most of the errors are associated with third party plugins, so you need to comment out those references in your game code or remove the plugins completely if errors still persist. 

List of known files and plugins that conflict are

#### 5.2.1 Newtonsoft.Json

Unity has now included Newtonsoft.Json as part of their own bundle after 2019, if you are using it externally then either you can remove the external file and refer to the built-in Unity has provided or you can simply remove Unity Collab package from the Package manager (that already includes the Newtonsoft.Json to avoid the redundancy errors)

#### 5.2.2 Firebase Analytics

Google Firebase Analytics plugins can cause the conflict, try to remove its references in your game code or remove the plugin completely if errors still persist

#### 5.2.3 NaughtyAttributes

In some rare cases the third party Unity extension NaughtyAttributes can cause some conflict, try to remove the its references in your game code or remove the plugin completely if errors still persist

#### 5.2.4 VoodooSauce

In some rare cases the third party Unity extension VoodooSauce can cause some conflict, try to remove the its references in your game code or remove the plugin completely if errors still persist

### 5.3 Upload Failed after Build Successful

Please make sure you are connected to the internet and you are not getting any timeout errors. If everything is perfect at your end, try it again after sometime (as it could be due to server downtime for maintenance)
