clear

# Greet the user and tell then that the script has started.
echo "Hello, $USER! The script has started:"
# Create required hugo directories
echo "Creating required Hugo build directories:"
mkdir archetypes content layouts static
echo "Directories created. Execute hugo serve and you'll be golden!"
