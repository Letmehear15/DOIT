<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticlesRepository::class)
 */
class Articles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="articles")
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity=Comments::class, mappedBy="article")
     */
    private $comments;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stage;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity=Review::class, mappedBy="article")
     */
    private $reviews;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $document;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity=Journal::class, inversedBy="articles")
     */
    private $journal;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }
    

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection|Comments[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setArticle($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getArticle() === $this) {
                $comment->setArticle(null);
            }
        }

        return $this;
    }
    /**
     * Specify data which should be serialized to JSON
     * @link https://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        $comments = $this->getComments();
        $j=0;
        $commentsjson = array();
        foreach ($comments as $c) {

            $commentsjson[$j] = array(
                'id' => $c->getId(),
                'autor' => $c->getAuthor(),
                'text' => $c->getComment()
            );
            $j++;
        }

        $j=0;
        $reviews = $this->getReviews();
        $review = NULL;
        foreach ($reviews as $r) {
            $review[$j] = array(
                'id' => $r->getId(),
                'review' => $r->getReview(),
                'reviewer' => $r->getReviewer(),
                'evaluation' => $r->getEvaluation()
            );
            $j++;
        }
        $journal = NULL;
        if($this->getJournal()){
            $journal = $this->getJournal()->jsonSerialize();
        }
        return [
            "id" => $this->getId(),
            "title" => $this->getTitle(),
            "descr" => $this->getDescription(),
            "author"=> $this->getAuthor(),
            "comments" => $commentsjson,
            "review" => $review,
            //"comments" => $this->getComments(),
            "stage" => $this->getStage(),
            "status" => $this->getStatus(),
            "category" => $this->getCategory(),
            "journal" => $journal
        ];
    }

    public function getStage(): ?string
    {
        return $this->stage;
    }

    public function setStage(string $stage): self
    {
        $this->stage = $stage;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): self
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews[] = $review;
            $review->setArticle($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->reviews->removeElement($review)) {
            // set the owning side to null (unless already changed)
            if ($review->getArticle() === $this) {
                $review->setArticle(null);
            }
        }

        return $this;
    }

    public function getDocument(): ?string
    {
        return $this->document;
    }

    public function setDocument(?string $document): self
    {
        $this->document = $document;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getJournal(): ?Journal
    {
        return $this->journal;
    }

    public function setJournal(?Journal $journal): self
    {
        $this->journal = $journal;

        return $this;
    }
}
