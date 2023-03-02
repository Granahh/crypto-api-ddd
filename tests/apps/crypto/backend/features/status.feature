Feature: Api status
  In order to know the server is up and running
  As a health check
  I want to check the api status

  Scenario: Check the api status
    Given I send a GET request to "/status"
    And the response status code should be 200
    And the response content should be:
    """
      {
       "msg": "ok"
      }
    """


