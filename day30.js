// What will the following code print to the console?

const techResources = {
    free: ['FreeCodeCamp', 'Codecademy', '100 Devs'],
    mentorship: ['Black Valley', 'Reach out to the folks on LinkedIn'],
    'connecting with techies': {
        communitiesForWomen: ['Coding Black Females', 'Code First Girls', 
    'Black Girls in Tech'],
         socialsToFollow: ['follow @codeherjourney']
    }
}

console.log(techResources['connecting with techies'].socialsToFollow[0])