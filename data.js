/**
 * EP2 Dashboard - Sample Data
 * Uses mock data for demo purposes
 * Switch to n8n webhook when ready by uncommenting the fetch code
 */

const EP2_CONFIG = {
    // Uncomment when n8n is set up:
    // N8N_WEBHOOK_URL: 'https://n8n.praxiainsights.com/webhook/ep2-dashboard-data',
    USE_SAMPLE_DATA: true
};

// Sample submissions data
const SAMPLE_SUBMISSIONS = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', personality: 'Wolf', risk: 'High', reward: 'High', completionTime: '4:32', submittedAt: new Date(Date.now() - 1000 * 60 * 30) },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@example.com', personality: 'Tiger', risk: 'High', reward: 'Medium', completionTime: '3:45', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2) },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.r@example.com', personality: 'Whale', risk: 'Low', reward: 'Medium', completionTime: '6:12', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 5) },
    { id: 4, name: 'David Kim', email: 'david.kim@example.com', personality: 'Lion', risk: 'Medium', reward: 'High', completionTime: '4:58', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 8) },
    { id: 5, name: 'Jessica Thompson', email: 'jthompson@example.com', personality: 'Wolf', risk: 'Medium', reward: 'Medium', completionTime: '5:23', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24) },
    { id: 6, name: 'Michael Brown', email: 'mbrown@example.com', personality: 'Tiger', risk: 'High', reward: 'High', completionTime: '3:15', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 26) },
    { id: 7, name: 'Amanda White', email: 'amanda.w@example.com', personality: 'Whale', risk: 'Low', reward: 'Low', completionTime: '7:45', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 48) },
    { id: 8, name: 'Christopher Lee', email: 'chris.lee@example.com', personality: 'Lion', risk: 'Medium', reward: 'Medium', completionTime: '4:02', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 52) },
    { id: 9, name: 'Nicole Garcia', email: 'ngarcia@example.com', personality: 'Wolf', risk: 'High', reward: 'Medium', completionTime: '5:55', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 72) },
    { id: 10, name: 'Ryan Martinez', email: 'ryan.m@example.com', personality: 'Tiger', risk: 'Medium', reward: 'High', completionTime: '3:38', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 96) },
    { id: 11, name: 'Stephanie Wilson', email: 'swilson@example.com', personality: 'Whale', risk: 'Low', reward: 'Medium', completionTime: '6:28', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 120) },
    { id: 12, name: 'Daniel Taylor', email: 'dtaylor@example.com', personality: 'Lion', risk: 'High', reward: 'High', completionTime: '4:15', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 144) },
    { id: 13, name: 'Rachel Anderson', email: 'rachel.a@example.com', personality: 'Wolf', risk: 'Medium', reward: 'Low', completionTime: '5:42', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 168) },
    { id: 14, name: 'James Moore', email: 'jmoore@example.com', personality: 'Tiger', risk: 'High', reward: 'Medium', completionTime: '3:52', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 192) },
    { id: 15, name: 'Lauren Jackson', email: 'ljackson@example.com', personality: 'Whale', risk: 'Medium', reward: 'Medium', completionTime: '6:05', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 216) },
    { id: 16, name: 'Kevin Harris', email: 'kharris@example.com', personality: 'Lion', risk: 'Low', reward: 'High', completionTime: '4:48', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 240) },
    { id: 17, name: 'Megan Clark', email: 'mclark@example.com', personality: 'Wolf', risk: 'High', reward: 'High', completionTime: '5:18', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 264) },
    { id: 18, name: 'Andrew Lewis', email: 'alewis@example.com', personality: 'Tiger', risk: 'Medium', reward: 'Medium', completionTime: '3:28', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 288) },
    { id: 19, name: 'Brittany Robinson', email: 'brobinson@example.com', personality: 'Whale', risk: 'Low', reward: 'Low', completionTime: '7:12', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 312) },
    { id: 20, name: 'Tyler Walker', email: 'twalker@example.com', personality: 'Lion', risk: 'High', reward: 'Medium', completionTime: '4:35', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 336) },
    { id: 21, name: 'Samantha Hall', email: 'shall@example.com', personality: 'Wolf', risk: 'Medium', reward: 'High', completionTime: '5:08', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 360) },
    { id: 22, name: 'Brandon Young', email: 'byoung@example.com', personality: 'Tiger', risk: 'High', reward: 'High', completionTime: '3:42', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 384) },
    { id: 23, name: 'Kayla Allen', email: 'kallen@example.com', personality: 'Whale', risk: 'Medium', reward: 'Low', completionTime: '6:55', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 408) },
    { id: 24, name: 'Justin King', email: 'jking@example.com', personality: 'Lion', risk: 'Low', reward: 'Medium', completionTime: '4:22', submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 432) },
];

/**
 * EP2 Dashboard Data Manager
 */
class EP2DataManager {
    constructor() {
        this.cache = null;
        this.lastFetch = null;
        this.cacheTimeout = 5 * 60 * 1000;
    }

    async getDashboardData(forceRefresh = false) {
        if (!forceRefresh && this.cache && (Date.now() - this.lastFetch) < this.cacheTimeout) {
            return this.cache;
        }

        // Use sample data
        const submissions = SAMPLE_SUBMISSIONS;
        const stats = this.calculateStats(submissions);

        this.cache = {
            submissions,
            stats,
            personalities: this.calculatePersonalityDistribution(submissions),
            riskDistribution: this.calculateRiskDistribution(submissions),
            rewardDistribution: this.calculateRewardDistribution(submissions),
            industryPreferences: { 'Tech': 8, 'Consulting': 6, 'Healthcare': 5, 'Finance': 4, 'Retail': 3, 'Education': 2 },
            weeklyTrends: [3, 5, 4, 6, 8, 4, 2],
            lastUpdated: new Date()
        };

        this.lastFetch = Date.now();
        return this.cache;
    }

    calculateStats(submissions) {
        const total = submissions.length;
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const thisWeek = submissions.filter(s => s.submittedAt >= weekAgo).length;

        const times = submissions.filter(s => s.completionTime).map(s => {
            const [m, sec] = s.completionTime.split(':').map(Number);
            return m * 60 + sec;
        });
        const avgSecs = times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0;
        const avgMins = Math.floor(avgSecs / 60);
        const avgSecsRem = Math.floor(avgSecs % 60);

        return {
            totalSubmissions: total,
            completionRate: 94,
            avgCompletionTime: `${avgMins}:${String(avgSecsRem).padStart(2, '0')}`,
            thisWeek,
            changes: { thisWeek: 12.5, submissions: 8.3 }
        };
    }

    calculatePersonalityDistribution(submissions) {
        const counts = { Wolf: 0, Tiger: 0, Whale: 0, Lion: 0 };
        submissions.forEach(s => { if (counts.hasOwnProperty(s.personality)) counts[s.personality]++; });
        const total = submissions.length || 1;
        return {
            wolf: { count: counts.Wolf, percent: ((counts.Wolf / total) * 100).toFixed(1) },
            tiger: { count: counts.Tiger, percent: ((counts.Tiger / total) * 100).toFixed(1) },
            whale: { count: counts.Whale, percent: ((counts.Whale / total) * 100).toFixed(1) },
            lion: { count: counts.Lion, percent: ((counts.Lion / total) * 100).toFixed(1) }
        };
    }

    calculateRiskDistribution(submissions) {
        const counts = { High: 0, Medium: 0, Low: 0 };
        submissions.forEach(s => { if (counts.hasOwnProperty(s.risk)) counts[s.risk]++; });
        const total = submissions.length || 1;
        return {
            high: Math.round((counts.High / total) * 100),
            medium: Math.round((counts.Medium / total) * 100),
            low: Math.round((counts.Low / total) * 100)
        };
    }

    calculateRewardDistribution(submissions) {
        const counts = { High: 0, Medium: 0, Low: 0 };
        submissions.forEach(s => { if (counts.hasOwnProperty(s.reward)) counts[s.reward]++; });
        const total = submissions.length || 1;
        return {
            high: Math.round((counts.High / total) * 100),
            medium: Math.round((counts.Medium / total) * 100),
            low: Math.round((counts.Low / total) * 100)
        };
    }

    formatRelativeTime(date) {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes} min ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (days === 1) return 'Yesterday';
        if (days < 7) return `${days} days ago`;
        return new Date(date).toLocaleDateString();
    }
}

window.EP2Data = new EP2DataManager();
