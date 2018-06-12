# importing the time module and the random module
import time
from random import randint
# welcoming the user
print "Hangman 1.0"
again = True

while again:
    players = raw_input("1 or 2 players? ")
    if players == '1' or players == 'one' or players == 'One':
        players = 1
        again = False
        name = raw_input("What is your name? ")
        print "Hello, " + name + ". Time to play hangman!"
    elif players == '2' or players == 'two' or players == 'Two':
        players = 2
        again = False
        print "player 1, you choose a word and player 2, you try to guess what it is!"
        name1 = raw_input("Player 1, What is your name? ")
        name2 = raw_input("Player 2, What is your name? ")
        print "Hello, " + name1, "and ", name2 + ". Time to play hangman!"
    else:
        fix = raw_input("player value invalid. Retry?(if not the player number will be 1) ")
        if fix != "yes" and fix != "Yes":
            players = 1
            again = False
        
print ""

# wait for 1 second
time.sleep(1)

# here we set the secret
words = ['awkward','bagpipes','banjo','bungler','croquet','crypt','dwarves',
         'fervid','fishhook','fjord','gazebo','gypsy','haiku','haphazard',
         'hyphen','ivory','jazz','jazzy','jiffy','jinx','jukebox','kayak',
         'kiosk','klutz','memento','mystify','numbskull','ostracize','oxygen',
         'pajama','phlegm','pixel','polka','quad','quip','rythmic','rogue',
         'sphinx','squawk','swivel','toady','twelfth','unzip','waxy',
         'wildebeest','yacht','zealous','zigzag','zippy','zombie']
if players == 1:
    i = len(words)-1
    random = randint(0,i)
    word = words[random]

    test = True
    while test:
        mode = raw_input("What mode: Easy, Medium, or Hard? ")
        if mode == "Easy" or mode == "easy":
            turns = 10
            test = False
        elif mode == "Medium" or mode == "medium":
            turns = 8
            test = False
        elif mode == "Hard" or mode == "hard":
            turns = 6
            test = False
        else:
            choice = raw_input("Invalid Input: Retry? ")
            if choice != "yes" and choice != "Yes":
                turns = 6
                test = False
else:
    word = raw_input("OK, " + name1 + " pick a word.(lowercase please without punctuation) " + name2 + " no peeking! ")
    print "\n" * 100

    time.sleep(0.5)

    # determine the number of turns

    # loop detirmines that input is integer
    redo = True
    while redo:
        print name1, ", how many turns will you give ", name2, ". The default is 6 \n"
        turn_str = raw_input(name1 + " 6-10? ")
        try:
            turns = int(turn_str)
        except ValueError:
            print "ValueError, your number is not an integer!"
            retry = raw_input(" Retry?(it will use a default of 6 if you do not) ")
            if retry != "yes" and retry != "Yes":
                turns = 6
                redo = False
        if turns > 10:
            print("ValueError, your number is too big")
            retry = raw_input(" Retry?(it will use a default of 6 if you do not) ")
            if retry != "yes" and retry != "Yes":
                turns = 6
                redo = False
        if turns < 6:
            print("ValueError, your number is too small")
            retry = raw_input(" Retry?(it will use a default of 6 if you do not) ")
            if retry != "yes" and retry != "Yes":
                turns = 6
                redo = False
        else:
            redo = False

time.sleep(0.5)

print "Start guessing..."
time.sleep(0.5)

# creates an variable with an empty value
guesses = ' '

# Create a while loop

# check if the turns are more than zero
while turns > 0:
    # make a counter that starts with zero
    failed = 0

    # for every character in secret_word
    for char in word:

        # see if the character is in the players guess
        if char in guesses:

            # print then out the character
            print char,
        else:
            # if not found, print a dash
            print "_",
        # and increase the failed counter with one
            failed += 1


    # if failed is equal to zero

    # print You Won
    if failed == 0:
        print "\nYou won!"

    # exit the script
        break

    print

    # ask the user go guess a character
    guess = raw_input("guess a character: ")

    # set the players guess to guesses
    guesses += guess

    # if the guess is not found in the secret word
    if guess not in word:

        # turns counter decreases with 1 (now 9)
        turns -= 1

        # print wrong
        print "Wrong"

        # how many turns are left
        print "You have", + turns, 'more guesses'

    # if the turns are equal to zero
        if turns == 0:

            # print "You Lose"
            print "You Lose"
            print "The word was ", word
