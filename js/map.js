var Map = {
	// Unique ID associated with this map
	ID:00001,
	Details:{
		Name:"Sandy Beach",
		Description:"A nice sandy beach.",
		LevelRange:"1-10"
	},
	Assets:[
		{
			Type:"Backdrop",
			Path:"/maps/beach/bg/"
		},
		{
			Type:"NPC",
			ID:0001111,
			GPS:{ X:10, Y:100, Z:2 },
			Clickable:true
		},
		{
			Type:"Platform",
			Name:"platform1",
			TileMap:"/maps/beach/ground01/",
			GPS:{ X:10, Y:100, Z:2 }
		}
	],
	Connections:[
		{
			ID:00102,
			GPS:{ X:10, Y:100, Z:2 },
			Locked:false
		},
		{
			ID:00104,
			GPS:{ X:10, Y:100, Z:2 },
			Locked:true,
			Unlock:{
				PlayerLevel:10
			}
		}		
	],
	Mobs:[
		{
			ID:000001,
			Location:"platform1",
			Rate:1000,
			Maximum:100
		},
		{
			ID:000002,
			Location:"platform1",
			Rate:5000,
			Maximum:5			
		}
	]
}
