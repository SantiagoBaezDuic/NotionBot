const { Client, GatewayIntentBits } = require('discord.js');
const deployCommands = require("./deploy-commands.js");
const NotionInstance = require("./notion-controller.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

deployCommands();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === `notion`) {
    await interaction.reply(`Notion link: ${process.env["NOTIONURL"]}`)
  }
});

client.login(process.env['TOKEN']);