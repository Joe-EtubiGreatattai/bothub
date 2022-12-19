import textblob
import requests
from bs4 import BeautifulSoup
from textblob import blob


def get_page_sentiment(url_link):
    # Use the requests library to fetch the contents of the URL
    page = requests.get(url_link)

    # Use BeautifulSoup to parse the HTML content
    soup = BeautifulSoup(page.content, 'html.parser')

    # Find all the links on the page
    links = soup.find_all('a')

    # Initialize a list to store the sentiments of the links
    link_sentiments = []

    # Iterate over the links
    for link in links:
        # Get the text of the link
        link_text = link.get_text()

        # Use TextBlob to perform sentiment analysis on the link text
        sentiment = textblob.TextBlob(link_text).sentiment

        # Convert the sentiment to a float
        sentiment_float = float(sentiment.polarity)
        # Append the sentiment to the list
        link_sentiments.append(sentiment)
        # Print the result based on the sentiment
        if sentiment_float >= 0.4:
            print(f'{link_text}: Good')
        elif sentiment_float >= 0 or sentiment_float <= 0.3:
            print(f'{link_text}: Neutral')
        else:
            print(f'{link_text}: Bad')

    # Return the list of link sentiments
    return link_sentiments


# Prompt the user for a URL
url = input("Enter a URL: ")

# Get the sentiments of the links on the page
link_sentiments = get_page_sentiment(url)