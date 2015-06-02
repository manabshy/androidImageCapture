# androidAppWo
Android Web App constructed using HTML5,CSS3,AngularJS,JavaScript and packaged using PhoneGap and Cordova for android.

How to use - 

1.Clone the repo
  git clone https://github.com/manabshy/androidImageCapture 

2.Install cordova - on OS X and Linux:
  sudo npm install -g cordova

3. Switch to the project directory - immediate "www" folder in the project tree

4. cordova build android

5. cordova emulate android

Note: For steps 4 - Configure your emulator either in eclipse/android Studio



/****For more information - Please read below******/

You need Android Studio to deploy it in the Emulator or run it on your Android device

For more Information -

http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide

1.You need to  install the camera cordova plugin - use the below command

	cordova plugin add org.apache.cordova.camera
	
2.Add configuration details in config.xml and  AndroidManifest.xml

For Android - 

(in app/res/xml/config.xml)
<feature name="Camera">
    <param name="android-package" value="org.apache.cordova.camera.CameraLauncher" />
</feature>


(in app/AndroidManifest)
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

For further information - Please read the below article:

http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html#camera.getPicture

Some useful commands below:

How to run this within Android Studio:

1. Open Android Studio - Click on File - New - Project - Project From Version Control - GitHub
2. Enter the GitHub details - For Git Repository URL - https://github.com/manabshy/androidAppWo.git
3. Click on Clone
4. Configure the project - Please notice for a message  - "Android project detected"
5. Open the Terminal Window in Android Studio or a separate one
6. Run the below commands to build the app and launch it in the emulator


cordova phonegap

$ cordova create hello com.example.hello HelloWorld

$ cd hello

$ cordova platform add android

$ cordova build

$ cordova emulate android   /* This pushes the app to the home screen - Emulator and launches it: */

In Android Studio

File - New - Import Project

select the folder - “android" inside platforms as below

/Users/manan/Sites/myproject/phonegap_projects/wo/platforms/android

Preview it in the emulator

*** how to modify ***

1. Modify the codes

2. Start the build as described above

3. Preview it in the emulator

