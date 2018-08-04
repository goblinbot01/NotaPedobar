const a=require("discord.js");
const b=new a.Client();
//const g=require("request");
b.on("message",function(message){
    if(message.author.bot){
        return;
    }
    var c=message.content;
    var f=c.split(" ");
    var d=f[0].slice(2);
    if(c.startsWith("p.")){
        if(!message.channel.name=="bots-only"){
            message.reply("this is not a channel where you can do that.");
            return;
        }
        switch(d){
            case "":
                message.channel.send("Why I should respond to nothing?");
                break;
            case "pg":
                                if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
                if (d[1] != null) {
                    message.channel.fetchMessages({

                        limit: d[1] - 1
                    }).then(messages => {
                        message.channel.bulkDelete(messages)
                        message.channel.send("Deleted successfully " + d - 1 + " messages.").then(message => message.delete(5000))
                    }).catch(err => {
                        message.channel.send("Error occured while doing Bulk Delete. You can't delete messages older than 14 days.")
                    })
                }
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
