 #pragma strict
 
 var walk : AudioClip;
 var run : AudioClip;
 
 var isWalking : boolean = false;
 var isRunning : boolean = false;
 
 
 function Update() 
 {
     GetState();
     PlayAudio();
 }
 
 
 function GetState() 
 {
     if ( Input.GetAxis( "Horizontal" ) || Input.GetAxis( "Vertical" ) )
     {
         if ( Input.GetKey( "left shift" ) || Input.GetKey( "right shift" ) )
         {
             // Running
             isWalking = true;
             isRunning = false;
         }
         else
         {
             // Walking
             isWalking = false;
             isRunning = true;
         }
     }
     else
     {
         // Stopped
         isWalking = false;
         isRunning = false;
     }
 }
 
 
 function PlayAudio() 
 {
     if ( isWalking )
     {
         if ( audio.clip != walk )
         {
             audio.Stop();
             audio.clip = walk;
         }
         
         if ( !audio.isPlaying )
         {
             audio.Play();
         }
     }
     else if ( isRunning )
     {
         if ( audio.clip != run )
         {
             audio.Stop();
             audio.clip = run;
         }
         
         if ( !audio.isPlaying )
         {
             audio.Play();
         }
     }
     else
     {
         audio.Stop();
     }
 }