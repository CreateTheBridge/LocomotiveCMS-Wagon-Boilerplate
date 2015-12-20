class Boilerplate < Locomotive::Wagon::Generators::Site::Base
  def self.source_root
    File.join(File.dirname(__FILE__), 'boilerplate')
  end
end

Locomotive::Wagon::Generators::Site.register(:boilerplate, Boilerplate, %{
  The default Create the Bridge boilerplate for Locomotive CMS.
})