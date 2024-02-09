  // Set the date to countdown to
  const countdownDate = new Date("2024-03-25T23:59:59").getTime();

  // Update the countdown every 1 second
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("Countdown").innerHTML = `There are: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until my birthday.`;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);