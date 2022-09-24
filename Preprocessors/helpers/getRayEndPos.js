const getRayEndPos = ({x, y, distance, direction}) => {
	const scale = game.scenes.current.dimensions;
    
	const radians = direction * (Math.PI / 180);
	const newX = Math.cos(radians) * distance * (scale.size / scale.distance);
	const newY = Math.sin(radians) * distance * (scale.size / scale.distance);
	return { x: newX + x, y: newY + y };
};