// JavaScript for Our Team page
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Handle click on team member
        member.addEventListener('click', function(e) {
            // Don't toggle if clicking on social links directly
            if (e.target.closest('.social-links a')) {
                return;
            }
            
            // Close all other open social links
            teamMembers.forEach(m => {
                if (m !== member) {
                    m.classList.remove('active');
                }
            });
            
            // Toggle current member
            member.classList.toggle('active');
        });
    });

    // Close social links when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.team-member')) {
            teamMembers.forEach(member => {
                member.classList.remove('active');
            });
        }
    });

    // Keyboard navigation support
    teamMembers.forEach(member => {
        member.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                member.click();
            }
        });
    });
});