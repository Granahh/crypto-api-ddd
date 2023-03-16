Feature: Coins Creator
  Scenario: Create a coin called Btc
    Given I send a PUT request to "/coin/BTC" with body:
    """
     {
       "name": "Bitcoin",
       "price": "23000.00"
     }
    """
    And the response status code should be 201



