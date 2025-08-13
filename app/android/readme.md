# How to run this prohect on an android device using Capacitor:

Assumed domain name is 'open-cycle.com'
Assumed package ID is 'com.open.cycle'

Gradle version: 8.11.1
Java version: 21
Java runtime for Android Studio: 21

To install Capacitor, run:
npm install @capacitor/core @capacitor/cli
npx cap init
npm install @capacitor/android
npx cap open android
npm run build
npx cap sync

To run thi project on an android emulators, start an emulator on Android Studio. Create one if you do not have an emulator.
This is the details/setting of the emulator that was used.
Properties
avd.ini.displayname Medium Phone API 36.0
avd.ini.encoding UTF-8
AvdId Medium_Phone_API_36.0
disk.dataPartition.size 6442450944
fastboot.chosenSnapshotFile  
fastboot.forceChosenSnapshotBoot no
fastboot.forceColdBoot no
fastboot.forceFastBoot yes
hw.accelerometer yes
hw.arc false
hw.audioInput yes
hw.battery yes
hw.camera.back virtualscene
hw.camera.front emulated
hw.cpu.ncore 8
hw.device.hash2 MD5:2016577e1656e8e7c2adb0fac972beea
hw.device.manufacturer Generic
hw.device.name medium_phone
hw.dPad no
hw.gps yes
hw.gpu.enabled yes
hw.gpu.mode auto
hw.gyroscope yes
hw.initialOrientation portrait
hw.keyboard yes
hw.lcd.density 420
hw.lcd.height 2400
hw.lcd.width 1080
hw.mainKeys no
hw.ramSize 2048
hw.sdCard yes
hw.sensors.light yes
hw.sensors.magnetic_field yes
hw.sensors.orientation yes
hw.sensors.pressure yes
hw.sensors.proximity yes
hw.trackBall no
image.sysdir.1 system-images/android-36/google_apis_playstore/x86_64/
PlayStore.enabled true
runtime.network.latency none
runtime.network.speed full
showDeviceFrame yes
skin.dynamic yes
tag.display Google Play
tag.displaynames Google Play
tag.id google_apis_playstore
tag.ids google_apis_playstore
target android-36
vm.heapSize 336

In the app directory, run
npx cap run android
