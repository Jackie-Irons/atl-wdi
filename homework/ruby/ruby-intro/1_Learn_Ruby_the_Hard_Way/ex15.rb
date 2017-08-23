=begin
This is stuff I typed into a file.
It is really cool stuff.
Lots and lots of fun to have in here.
=end

filename = ARGV.first

txt = open(filename)

puts "Here's your file #{filename} :"
print txt.read


print "Type the filename agian: "
file_name = $stdin.gets.chomp