export const techRadarSkills = [
    // Orbit 1 (innermost - 120px radius)
    { name: "React", category: "Frontend", proficiency: 90, orbit: 1, angle: 0, color: '#00f2ff' },
    { name: "JavaScript", category: "Frontend", proficiency: 85, orbit: 1, angle: 180, color: '#00f2ff' },

    // Orbit 2 (middle - 180px radius)
    { name: "Node.js", category: "Backend", proficiency: 80, orbit: 2, angle: 0, color: '#7000ff' },
    { name: "MongoDB", category: "Database", proficiency: 75, orbit: 2, angle: 90, color: '#8000ff' },
    { name: "Git", category: "Tools", proficiency: 82, orbit: 2, angle: 180, color: '#00d9ff' },
    { name: "Express", category: "Backend", proficiency: 78, orbit: 2, angle: 270, color: '#7000ff' },

    // Orbit 3 (outermost - 240px radius)
    { name: "Python", category: "Programming", proficiency: 70, orbit: 3, angle: 0, color: '#9000ff' },
    { name: "SQL", category: "Database", proficiency: 72, orbit: 3, angle: 90, color: '#8000ff' },
    { name: "DSA", category: "Programming", proficiency: 85, orbit: 3, angle: 180, color: '#9000ff' },
    { name: "Postman", category: "Tools", proficiency: 80, orbit: 3, angle: 270, color: '#00d9ff' }
];

export const techCategories = [
    { name: 'Frontend', color: '#00f2ff', count: 2 },
    { name: 'Backend', color: '#7000ff', count: 2 },
    { name: 'Database', color: '#8000ff', count: 2 },
    { name: 'Tools', color: '#00d9ff', count: 2 },
    { name: 'Programming', color: '#9000ff', count: 2 }
];

// Orbit radii in pixels
export const orbitRadii = {
    1: 120,
    2: 180,
    3: 240
};
