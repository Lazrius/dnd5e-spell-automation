const getRayEndPos = ({x, y, distance, direction}) => {
	const scale = game.scenes.current.dimensions;
    
	const radians = direction * (Math.PI / 180);
	const newX = Math.cos(radians) * distance * (scale.size / scale.distance);
	const newY = Math.sin(radians) * distance * (scale.size / scale.distance);
	return { x: newX + x, y: newY + y };
};

// Also define our end and mid position for convienence
const templateEndPos = getRayEndPos(template);
const templateMiddleGround = { x: (template.x + templateEndPos.x) / 2, y: (template.y + templateEndPos.y) / 2 };