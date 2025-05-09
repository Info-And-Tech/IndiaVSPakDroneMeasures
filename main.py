import requests

def save_website_html(url, output_file='report.html'):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses (4xx or 5xx)

        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(response.text)
        
        print(f"HTML saved to {output_file}")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching the website: {e}")

# Example usage
website_url = 'https://chatgpt.com/s/dr_681d959518d48191986f35f5b253837b'  # Replace with the website you want to fetch
save_website_html(website_url)
