
export const options = {
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 50,
    scaleStartValue: 0,
    responsive: true,
    maintainAspectRatio: false,
}

export const getChartsData = (labels, data, isBadge) => {
    return {
        labels: labels || [],
        datasets: [{
            label: isBadge ? 'Badge Generated' : 'Attestation Generated',
            data: data || [],
            fill: true,
            hoverBackgroundColor: "#9DA6AB",
            tension: 0.2
        }]
    }
}
