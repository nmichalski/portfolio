Nmichalski::Application.routes.draw do
  
  root :to => 'application#home'

  match 'tribune' => 'application#tribune', :as => :tribune
  match 'enova' => 'application#enova', :as => :enova

end