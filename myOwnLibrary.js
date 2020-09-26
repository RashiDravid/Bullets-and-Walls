function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=wallleftEdge)
  {
    return true;
  }
    return false;
}