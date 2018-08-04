const a=require("discord.js");
const b=new a.Client();
//const g=require("request");
b.on("message",function(message){
    if(message.author.bot){
        return;
    }
    var c=message.content;
    var d=c.slice(2);
    var f=d.split(" ");
    if(c.startsWith("p.")){
        if(!message.channel.name=="bots-only"){
            message.reply("this is not a channel where you can do that.");
            return;
        }
        switch(d){
            case "":
                message.channel.send("Why I should respond to nothing?");
                break;
            case "game":
                message.channel.send("You can access the game here: http://www.modd.io/play/escapethepedobear");
                break;
            default:
                message.channel.send("I don't understand what are you trying to do.");
                break;
        
        }
    }
})
/*b.on("guildMemberAdd",function(member){
   member.guild.channels.get("welcome").send("")
})*/
b.login(process.env.TOKEN)
