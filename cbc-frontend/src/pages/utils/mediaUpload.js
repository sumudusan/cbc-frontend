import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqc3Zjc2htYmRzem9xYndqbGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczODc4NzgsImV4cCI6MjA1Mjk2Mzg3OH0.4lGHfH4Dr8Yqq9NFl4xkZCC7Yhrj8lj6MioJ7UzUT1o`;

const url = "https://cjsvcshmbdszoqbwjlin.supabase.co";

const supabase = createClient(url , key);

export default function uploadMediaToSupabase(file){
    
    return new Promise((resolve, reject)=>{
        if (!file) {
            alert("Please select a file");
            return;
          }
           // Get file name and validate the extension
  let fileName = file.name;
  const extension = fileName.split(".").pop().toLowerCase();

    //generate a unique name for a file
    const timestamp = new Date().getTime()
    fileName = timestamp+fileName+"."+extension;

          //'images' is the buckt name of the supabase
          supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          }).then(() => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
          }).catch((err)=>{
            reject(err);
          });
    })


}
