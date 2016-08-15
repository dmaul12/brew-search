class User < ActiveRecord::Base
  #checks to see if the password from bcrypt matches
  has_secure_password
  # has_many :brews
  has_many :names
  has_many :websites

end
