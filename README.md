DISCLAIMER
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This README file, and RioTor for that purpose, are a work in progress. If you have any comments, inquiries or concerns contact the administrators.


DESCRIPTION
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
A communications platform for activists, built by activists and not corporations, secure, private, and decentralized, while also accessible and user friendly. 


HISTORY
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
With the advent of telecommunications, a multitude of tools have become available for people to communicate to each other and organize, but these tools have failed in some regards.

-Some of the social networks that people use have become more of a distraction than an actual place of connection or active participation. They have contributed greatly to generating a feeling of conformity and passive activism.

-They have failed to become relevant in those moments and places where they could be very useful, such as marches, protests, rallies, general assemblies, decision making processes, committees, to mention a few.

-Propelled by an ever-growing profit-driven industry, these tools are becoming increasingly unsafe, infringing upon the user’s privacy rights and making their information available to questionable entities. Privacy and freedom of information are becoming less of a right, and more of a privilege.

People within radical hacktivism and more alternative realms of the tech world have seen these issues and built a plethora of alternatives, ranging from social networks that protect your data from third party providers, private and anonymous email, chat rooms and forums. However, these tools have yet to be properly designed and launched for the end user. Usually individuals will require a great amount of technical knowledge to use them and/or feel intimidated by the poor user interfaces and technical jargon that these tools feature.

The need for RioTor stems from the idea of bridging these two worlds.


FEATURES
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following features have not nearly been implemented or fully decided on. Comments are welcome.  

1. Security (Needs to be developed further. Ideas?)

-RioTor will be implemented and used in conjunction with the Tor network, making anonimity and privacy a priority. It is yet to be decided what the best route to go about this is, while maintaining the application's ideal of simple setup and ease of use. 
-Users can create anonymous accounts to add and update events. 
-Users' information and data is encrypted and protected from third parties.  


2. User interface 

-Has an event feed where users can create or search events near their area. These events would ideally include marches, protests, rallies, occupations, fundraisers, etc, but the expansive potential of RioTor promises that users will find creative and innovative ways of using these features for social good.

-Each event has an update feed and a live map of the region. 

-Events have multiple layers of security:
   Public events: Everyone in the area can see, archive or "star" an event. In addition, anyone can update it. 
   Private events: Only members with a particular "key" can search, access and update an event feed. 
   Hybrid events: Can be searched, seen and accessed by anyone, but can only be updated by the administrators. 

-Users can create accounts with or without an email address. Users that choose not to put in an email account don't get to recover their account if their password is lost. 

-Users can drag and drop icon updates on the map as the event is happening. These icons will correspond to either of these particular categories:
	A speech/or talk
	Police barricades or military presence
	Supplies such as gas masks, bandanas, among others. 
	Food
	Water
	Medical attention or help
	Documentation being handed out
	Press 
	Assembly/Place to meet
	Shelter/Where to stay the night

When an icon is dragged unto the map, it shows up on the event feed. Users can add text with details to the icon.

- Users can receive notifications during the action if any map updates are added, such as police barricades or help being provided. This would eliminate the need for having to constantly check what is happening.*

- Users can enter updates on the feed regarding the event, before or during. The updates can be done in either of the following forms:
 	Text updates
	Photo and video. These help attendees create a live photo-journalistic recollection of the event from multiple perspectives. This material can be used to gather evidence in instances of police brutality and repression.*
	Voice 

-Users can message each other through text or voice, securely. 

-Users can provide others with an account key that they can use to delete their account information in case of getting arrested or their device getting confiscated.
	 
*The security vulnerabilities of allowing the application to interact with phone hardware is an ongoing discussion, for which we don't have a clear answer yet. 


INSTALLATION
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

RioTor is a web application built with Meteor Framwework and Bootstrap. To download and run RioTor, install and run the Meteor development framework https://www.meteor.com/ on the RioTor folder. 


VERSION HISTORY
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-RioTor v.0.0 was released for the UCSC Hackathon. This release includes a basic homepage, navigation bar and a map that is not fully working, implemented with Leaflet.js


LOOKING FORWARD
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Features being discussed:
-A calendar of events 
-Ability to invite other users in the area to events. 
-Ability for different members to create "organizations" or "groups"
-Organizations or groups can create subgroups, "committees" or afinity groups to discuss particular issues. 
-Tools to aid in democratic decision making processes or general assemblies, where participants can make propositions for a movement or cause, and vote and add ammends to propositions other members have made. 
-Other tools to help in gathering evidence and documentation against any type of repression or legal proceedings. 

2. Integration with other projects: 
-Tapatio https://github.com/cooperq/tapatio

3. To be used in conjunction with points of Wifi routing (How do we accomplish this?)
In many instances during protests or marches, law enforcement officials shut down cell phone reception in the area so that organizers cannot communicate to one another. Given that RioTor can be accessed through smartphones, finding ways of ensuring wifi connection in these instances can make a difference between organizers being able to communicate with one another. 

TEAM
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
melinchaos junglebells@riseup.net
galar 



