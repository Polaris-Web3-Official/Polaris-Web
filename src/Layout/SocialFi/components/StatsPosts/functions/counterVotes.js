function countLikesPerHour(votes) {
    let likesPerHour = Array(24).fill(0);

    votes.forEach((vote) => {
        if (vote.time) {
            let voteTime = new Date(vote.time);
            let hour = voteTime.getHours(); // Usar getHours para obtener la hora local

            likesPerHour[hour]++;
        }
    });

    return likesPerHour;
}

export async function counterVotes(votes) {
    let counterPositiveVote = 0;
    let positiveVotesChart = [];
    let counterNegativeVote = 0;
    let negativeVotesChart = [];
    let counterComments = votes?.replies?.length || 0;
    let commentsChart = [];

    const url = 'https://api.hive.blog';
    const params = {
        jsonrpc: "2.0",
        method: "condenser_api.get_active_votes",
        params: [votes.author, votes.permlink],
        id: 1
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        });

        const datax = await response.json();
        const data = datax.result;

        let baseDate = null;
        let dayCounter = 0;

        data.forEach((vote, index) => {
            if (index === 0) {
                baseDate = new Date(vote.time.slice(0, 10));
            }

            const currentDate = new Date(baseDate);
            currentDate.setDate(currentDate.getDate() + dayCounter);
            const formattedDate = currentDate.toISOString().slice(0, 10);

            if (vote.percent > 0) {
                counterPositiveVote++;
                positiveVotesChart.push({ time: formattedDate, value: vote.percent / 100 });
            } else if (vote.percent < 0) {
                counterNegativeVote++;
                negativeVotesChart.push({ time: formattedDate, value: vote.percent / 100 });
            }

            dayCounter++;
        });

        let activityChart = countLikesPerHour(data);
        let principalVotersName = []
        let principalVotersValue = []


        data.forEach(x=> {
            principalVotersValue.push(x.percent)
            principalVotersName.push(x.voter)
            }
        )

        let principalVotersValueSorted = principalVotersValue.sort((a,b)=> b-a)

        return {
            positiveVotes: {
                chart: positiveVotesChart,
                votes: counterPositiveVote,
            },
            negativeVotes: {
                chart: negativeVotesChart,
                votes: counterNegativeVote,
            },
            comments: {
                chart: commentsChart,
                votes: counterComments,
            },
            activity: activityChart,
            principalVoters: {
                principalVotersName: principalVotersName,
                principalVotersValue: principalVotersValueSorted,
            },
        };
    } catch (e) {
        console.error('Error al obtener los likes del post:', e);
        throw new Error('Error fetching votes data');
    }
}
