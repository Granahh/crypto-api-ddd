Feature: Coins Searcher
  Background: Prepare coins
    Given There is a coin:
    """
      {
         "id":"BTC",
         "name":"Bitcoin",
         "price":"23000.00"
      }
    """
    Given There is a coin:
    """
      {
         "id":"ETH",
         "name":"Ethereum",
         "price":"3000.00"
      }
    """
    Given There is a coin:
    """
      {
         "id":"BAT",
         "name":"Basic Attention Token",
         "price":"1.00"
      }
    """
  Scenario: Check the coins searcher
    Given I send a GET request to "/coins"
    And the response status code should be 200
    And the response content should be:
    """
    {
       "coins":[
          {
             "id":"BAT",
             "name":"Basic Attention Token",
             "price":"1.00"
          },
          {
             "id":"BTC",
             "name":"Bitcoin",
             "price":"23000.00"
          },
          {
             "id":"ETH",
             "name":"Ethereum",
             "price":"3000.00"
          }
       ]
    }
    """


