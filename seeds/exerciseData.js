var exerciseData = [
  {
    id: 1,
    name: "Standing dumbell Curls ",
    description: `Curl the dumbbells upward, keeping your elbows close to your sides.
    Slowly lower the weights back down to the starting position. Repeat for the desired number of repetitions.`,
    category: "Biceps (Arms)",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 2,
    name: "Barbell Preacher Curls",
    description: `Sit on a preacher bench with your upper arms resting on the pad and your chest against it. 
    Grip the barbell with an underhand grip, shoulder-width apart. Curl the barbell upwards, keeping your upper arms stationary. 
    Squeeze your biceps at the top of the movement, then slowly lower the barbell back down. Repeat for the desired number of repetitions.`,
    category: "Biceps (arms)",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 3,
    name: "Tricep Dips",
    description: `Sit on a sturdy chair or bench with your hands gripping the edge, fingers facing forward. 
    Extend your legs out in front of you, keeping your feet flat on the floor. Lower your body by bending your elbows until your upper arms are parallel to the ground. 
    Push yourself back up to the starting position using your triceps.Repeat for the desired number of repetitions.`,
    category: "Triceps (arms)",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 4,
    name: "Close Grip Bench Press",
    description: `Lie on a flat bench with your hands shoulder-width apart, palms facing each other.
    Unrack the barbell and lower it to your chest, keeping your elbows close to your body.
    Push the barbell back up to the starting position using your triceps.
    Repeat for the desired number of repetitions.
    `,
    category: "Triceps",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 5,
    name: "Dumbbell Lateral Raises",
    description: `Stand with feet shoulder-width apart, holding a dumbbell in each hand, palms facing inward.
    Lift your arms out to the sides until they are parallel to the floor.
    Lower the dumbbells back down slowly.
    Repeat for the desired number of repetitions.
    `,
    category: "Deltoids (shoulders)",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 6,
    name: "Overhead Press",
    description: `Stand with feet shoulder-width apart, holding a barbell at shoulder level, palms facing forward.
    Press the barbell overhead, fully extending your arms.
    Lower the barbell back down to shoulder level.
    Repeat for the desired number of repetitions.
    `,
    category: "Deltoids (shoulders)",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 7,
    name: "Jumping Jacks",
    description: `You know how to do these, I'm sure.`,
    category: "Cardio",
    difficulty: 1,
    author: "Jai",
  },
  {
    id: 8,
    name: "Superman Exercise",
    description: `Lie facedown on a mat with your arms extended overhead and your legs straight.
    Lift your chest, arms, and legs off the ground, squeezing your lower back.
    Hold for a few seconds, then lower back down.
    Repeat for the desired number of repetitions.`,
    category: "Erector Spinae (spine):",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 9,
    name: "Barbell Deadlift",
    description: `Stand with feet hip-width apart, toes under the barbell.
    Bend your knees, keeping your back straight, and grip the barbell with hands slightly wider than shoulder-width apart.
    Lift the barbell by extending your hips and knees, keeping your back straight.
    Lower the barbell back down to the ground by bending at the hips and knees.
    Repeat for the desired number of repetitions.
    Trapezius (neck & shoulder blades):`,
    category: "Erector Spinae (spine):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 10,
    name: "Bent-Over Dumbbell Rows",
    description: `Stand with feet shoulder-width apart, holding a dumbbell in each hand, palms facing your body.
    Bend forward at the hips, keeping your back straight, until your torso is nearly parallel to the ground.
    Pull the dumbbells up to your sides, squeezing your shoulder blades together.
    Lower the dumbbells back down to the starting position.
    Repeat for the desired number of repetitions.`,
    category: "Latissimus Dorsi & Rhomboids (back & shoulder blades):",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 11,
    name: "Pull-Ups",
    description: `Hang from a pull-up bar with an overhand grip, hands wider than shoulder-width apart.
    Pull yourself upward, leading with your chest, until your chin clears the bar.
    Lower yourself back down with control.
    Repeat for the desired number of repetitions.`,
    category: "Latissimus Dorsi & Rhomboids (back & shoulder blades):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 12,
    name: "Push-Ups",
    description: `Start in a high plank position with your hands slightly wider than shoulder-width apart.
    Lower your body until your chest nearly touches the ground, keeping your elbows at a 45-degree angle.
    Push yourself back up to the starting position.
    Repeat for the desired number of repetitions.`,
    category: "Pectorals (chest):",
    difficulty: 4,
    author: "Marshall",
  },
  {
    id: 13,
    name: "Barbell Bench Press",
    description: `Lie on a flat bench with your feet on the ground and grip the barbell with hands slightly wider than shoulder-width apart.
    Lower the barbell to your chest, keeping your elbows at a 45-degree angle.
    Push the barbell back up to the starting position.
    Repeat for the desired number of repetitions.`,
    category: "Pectorals (chest):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 14,
    name: "Crunches",
    description: `Lie on your back with your knees bent and feet flat on the ground.
    Place your hands behind your head or cross them over your chest.
    Curl your shoulders off the ground, engaging your abdominal muscles.
    Lower yourself back down with control.
    Repeat for the desired number of repetitions.`,
    category: "Abdominals (abs):",
    difficulty: 4,
    author: "Marshall",
  },
  {
    id: 15,
    name: "Russian Twist",
    description: `Sit on the ground with your knees bent and feet lifted a few inches off the floor.
    Lean back slightly while maintaining a straight back and engage your core.
    Twist your torso to one side, then to the other, touching the ground with your hands each time.
    Repeat for the desired number of repetitions.`,
    category: "Abdominals (abs):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 16,
    name: "Side Plank",
    description: `Lie on your side with your forearm on the ground and elbow directly under your shoulder.
    Lift your hips off the ground, creating a straight line from head to feet.
    Hold the position for a certain duration, engaging your oblique muscles.
    Switch to the other side and repeat.`,
    category: "Obliques (sides):",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 17,
    name: "Bicycle Crunches",
    description: `Lie on your back with your knees bent and hands behind your head.
    Lift your shoulder blades off the ground and bring your left elbow towards your right knee while straightening your left leg.
    Alternate sides, bringing your right elbow towards your left knee while straightening your right leg.
    Repeat in a cycling motion for the desired number of repetitions.`,
    category: "Obliques (sides):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 18,
    name: "Glute Bridge",
    description: `Lie on your back with your knees bent and feet flat on the ground.
    Lift your hips off the ground until your body forms a straight line from knees to shoulders.
    Squeeze your glutes at the top, then lower your hips back down.
    Repeat for the desired number of repetition`,
    category: "Glutes (rear)",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 19,
    name: "Barbell Hip Thrust",
    description: `Sit on the ground with your upper back against a bench and place a barbell across your hips.
    Roll the barbell towards you and position it on your lower abdomen.
    Plant your feet on the ground and drive through your heels to lift your hips off the ground until your body forms a straight line from shoulders to knees.
    Lower your hips back down, then repeat for the desired number of repetitions.`,
    category: "Glutes (rear)",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 20,
    name: "Quadriceps (thighs):",
    description: "Bodyweight Squats",
    category: `Lower your body down into a squat position by bending your knees and pushing your hips back.
    Keep your chest up and weight on your heels.
    Rise back up to the starting position.
    Repeat for the desired number of repetitions`,
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 21,
    name: " Barbell Front Squats",
    description: `Stand with feet shoulder-width apart and place the barbell across the front of your shoulders, resting it on your fingertips.
    Lower your body down into a squat position by bending your knees and pushing your hips back.
    Keep your chest up and elbows high.
    Rise back up to the starting position.
    Repeat for the desired number of repetitions.`,
    category: "Quadriceps (thighs):",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 22,
    name: "Bodyweight Lunges",
    description: `Stand with feet hip-width apart.
    Take a step forward with your right foot and lower your body down until your front knee is bent at a 90-degree angle.
    Push through your front heel to return to the starting position.
    Repeat on the other side, alternating legs.
    Repeat for the desired number of repetitions.`,
    category: "Hamstrings (thighs)",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 23,
    name: "Romanian Deadlifts",
    description: `Stand with feet hip-width apart, holding a barbell with an overhand grip in front of your thighs.
    Hinge at the hips, keeping your back straight, and lower the barbell down your legs.
    Lower the barbell until you feel a stretch`,
    category: "Hamstrings (thighs)",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 24,
    name: "Wrist Curl",
    description: `Sit on a bench or chair with your forearm resting on your thigh, palm facing upward.
    Hold a dumbbell in your hand and allow your wrist to extend, letting the weight roll towards your fingers.
    Curl your wrist upward, lifting the dumbbell as high as possible.
    Slowly lower the dumbbell back down to the starting position.
    Repeat for the desired number of repetitions, then switch to the other hand.`,
    category: "Forearms",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 25,
    name: "Farmer's Walk",
    description: `Hold a heavy dumbbell or kettlebell in each hand, with your arms fully extended by your sides.
    Walk forward with a straight posture, taking short and controlled steps.
    Maintain a strong grip on the weights throughout the exercise.
    Walk for a specific distance or time, challenging your forearms and grip strength.`,
    category: "Forearms",
    difficulty: 8,
    author: "Alvin",
  },
  {
    id: 26,
    name: "Standing Calf Raise",
    description: `Stand on the edge of a step or platform with your heels hanging off, holding onto a railing or wall for support.
    Rise up onto your toes as high as possible, lifting your body weight with your calves.
    Hold the contraction at the top for a moment, then lower your heels back down below the step.
    Repeat for the desired number of repetitions.`,
    category: "Calves",
    difficulty: 4,
    author: "Alvin",
  },
  {
    id: 27,
    name: "Barbell Calf Raises",
    description: `Place a barbell across your upper back, resting it on your traps.
    Stand on a block or weight plates with the balls of your feet, keeping your heels suspended.
    Rise up onto your toes, lifting your body weight with your calves.
    Hold the contraction at the top for a moment, then lower your heels back down below the block.
    Repeat for the desired number of repetitions.`,
    category: "Calves",
    difficulty: 8,
    author: "Alvin",
  },
];
module.exports = exerciseData;
