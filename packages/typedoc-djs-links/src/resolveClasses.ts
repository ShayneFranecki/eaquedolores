const baseLink = 'https://discord.js.org/#/docs/main/stable/class';

const knownClasses = new Set([
	'Activity',
	'ActivityFlags',
	'AnonymousGuild',
	'Application',
	'ApplicationCommand',
	'ApplicationCommandManager',
	'ApplicationCommandPermissionsManager',
	'ApplicationFlags',
	'AutocompleteInteraction',
	'Base',
	'BaseClient',
	'BaseCommandInteraction',
	'BaseGuild',
	'BaseGuildEmoji',
	'BaseGuildEmojiManager',
	'BaseGuildTextChannel',
	'BaseGuildVoiceChannel',
	'BaseManager',
	'BaseMessageComponent',
	'BitField',
	'ButtonInteraction',
	'CachedManager',
	'CategoryChannel',
	'Channel',
	'ChannelManager',
	'Client',
	'ClientApplication',
	'ClientPresence',
	'ClientUser',
	'ClientVoiceManager',
	'Collector',
	'CommandInteraction',
	'CommandInteractionOptionResolver',
	'ContextMenuInteraction',
	'DataManager',
	'DiscordAPIError',
	'DMChannel',
	'Emoji',
	'Formatters',
	'Guild',
	'GuildApplicationCommandManager',
	'GuildAuditLogs',
	'GuildAuditLogsEntry',
	'GuildBan',
	'GuildBanManager',
	'GuildChannel',
	'GuildChannelManager',
	'GuildEmoji',
	'GuildEmojiManager',
	'GuildEmojiRoleManager',
	'GuildInviteManager',
	'GuildManager',
	'GuildMember',
	'GuildMemberManager',
	'GuildMemberRoleManager',
	'GuildPreview',
	'GuildPreviewEmoji',
	'GuildStickerManager',
	'GuildTemplate',
	'HTTPError',
	'Integration',
	'IntegrationApplication',
	'Intents',
	'Interaction',
	'InteractionCollector',
	'InteractionWebhook',
	'Invite',
	'InviteGuild',
	'InviteStageInstance',
	'LimitedCollection',
	'Message',
	'MessageActionRow',
	'MessageAttachment',
	'MessageButton',
	'MessageCollector',
	'MessageComponentInteraction',
	'MessageEmbed',
	'MessageFlags',
	'MessageManager',
	'MessageMentions',
	'MessagePayload',
	'MessageReaction',
	'MessageSelectMenu',
	'NewsChannel',
	'OAuth2Guild',
	'Options',
	'PartialGroupDMChannel',
	'PermissionOverwriteManager',
	'PermissionOverwrites',
	'Permissions',
	'Presence',
	'PresenceManager',
	'RateLimitError',
	'ReactionCollector',
	'ReactionEmoji',
	'ReactionManager',
	'ReactionUserManager',
	'RichPresenceAssets',
	'Role',
	'RoleManager',
	'SelectMenuInteraction',
	'Shard',
	'ShardClientUtil',
	'ShardingManager',
	'SnowflakeUtil',
	'StageChannel',
	'StageInstance',
	'StageInstanceManager',
	'Sticker',
	'StickerPack',
	'StoreChannel',
	'SystemChannelFlags',
	'Team',
	'TeamMember',
	'TextChannel',
	'ThreadChannel',
	'ThreadManager',
	'ThreadMember',
	'ThreadMemberFlags',
	'ThreadMemberManager',
	'Typing',
	'User',
	'UserFlags',
	'UserManager',
	'Util',
	'VoiceChannel',
	'VoiceRegion',
	'VoiceState',
	'VoiceStateManager',
	'Webhook',
	'WebhookClient',
	'WebSocketManager',
	'WebSocketShard',
	'WelcomeChannel',
	'WelcomeScreen',
	'Widget',
	'WidgetMember'
]);

export function resolveClasses(name: string): string | undefined {
	if (knownClasses.has(name)) {
		return `${baseLink}/${name}`;
	}

	return undefined;
}
